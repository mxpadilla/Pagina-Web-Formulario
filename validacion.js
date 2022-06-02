function validar()
{
    var rut = document.formulario.txt_rut.value
    var telefono = document.formulario.txt_telefono.value
    var direccion = document.formulario.txt_direccion.value
    var chocolate = document.getElementById("opt_tipo")
    var detalle = document.formulario.txa_pedido.value
    var pedido = document.formulario.rbt_delivery

    //validar rut
    if(rut.length == 0)
    {
        alert("Debe ingresar un rut")
        document.formulario.txt_nombre.focus()
        return false
    }
    else if(rut.length < 9 || rut.length > 10)
    {
        alert("El rut debe tener entre 9 a 10 caracteres")
        document.formulario.txt_rut.focus()
        return false
    }
    else if (rut.substr(-2,1) != "-")
    {
        alert("Debe colocar el digito verificador")
        document.formulario.txt_rut.focus()
        return false
    }

    //validar telefono
    if(telefono.length == 0)
    {
        alert("Debe ingresar un telefono")
        document.formulario.txt_telefono.focus()
        return false
    }
    else if(telefono.charAt(0) != 9)
    {
        alert("El telefono debe empezar con 9")
        document.formulario.txt_telefono.focus()
        return false
    }
    else if(telefono.length != 9)
    {
        alert("El telefono debe tener 9 caracteres como máximo")
        document.formulario.txt_telefono.focus()
        return false
    }
    else if(telefono.indexOf("+") >= 0 || telefono.indexOf("-") >= 0)
    {
        alert('El telefono no debe tener "+" o "-"')
        document.formulario.txt_telefono.focus()
        return false
    }
    

    //validar dirección
    if(direccion.length == 0 || direccion.length < 3)
    {
        alert("Ingrese una dirección valida")
        document.formulario.txt_nombre.focus()
        return false
    }


    //validar selección
    if(chocolate.value == 0)
    {
        alert("Selecione una opcion valida")
        document.formulario.opt_tipo.focus()
        return false
    }
    else
    {
        //busca la ID del Select correspondiente y lo transforma a texto
        choco_opt = chocolate.options[chocolate.selectedIndex].text
    }

    //validar detalle del pedido
    if(detalle.length == 0)
    {
        detalle = "Sin detalle."
    }

    //validar elección delivery
    if(pedido[0].checked == true || pedido[1].checked == true)
    { 
        pedido = pedido.value
    }
    else
    {
        alert("Seleccione una opcion")
        return false
    }

    //mensaje de confirmación del pedido
    alert("Pedido correctamente recibido")
    confirmacion = "RUT cliente               : "+rut+"\nTelefono                   : "+telefono+
    "\nDirección                  : "+direccion+"\nChocolate elegido   : "+choco_opt+"\nDetalle                     : "+detalle+"\nMedio de reparto    : "+pedido
    alert(confirmacion)
}