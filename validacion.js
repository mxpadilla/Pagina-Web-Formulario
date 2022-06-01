function validar()
{
    var rut = document.formulario.txt_rut.value
    var telefono = document.formulario.txt_telefono.value
    var direccion = document.formulario.txt_direccion.value

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
    //else if (rut) <- guion verificador


    if(telefono.length == 0)
    {
        alert("Debe ingresar un telefono")
        document.formulario.txt_telefono.focus()
        return false
    }
    //else if(telefono) <- que empiece con 9
    else if(telefono.length != 9)
    {
        alert("El telefono debe tener 9 caracteres como máximo")
        document.formulario.txt_telefono.focus()
        return false
    }
    
    if(direccion.length == 0 || direccion.length < 3)
    {
        alert("Ingrese una dirección valida")
        document.formulario.txt_nombre.focus()
        return false
    }

}