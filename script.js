/* INICIO DE SESIÓN */

const logIn = document.getElementById('inicioSesion');

const usuarios = [
    { nombre: "Luz", email: "luz@gmail.com", password: "luz", saldo: 100 },
    { nombre: "Pau", email: "pau@gmail.com", password: "pau", saldo: 200 },
    { nombre: "Mina", email: "mina@gmail.com", password: "mina", saldo: 170 },
    { nombre: "Amy", email: "aimee@gmail.com", password: "aimee", saldo: 300 },
    { nombre: "Kiki", email: "enrique@gmail.com", password: "enrique", saldo: 230 },
];


logIn.addEventListener("submit", function(event) {
    event.preventDefault()

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let encontrado = false;

    usuarios.forEach( (usuario) => {
        if (usuario.email === email && usuario.password === password) {
            encontrado = true;
            alert(`¡Bienvenido(a) ${usuario.nombre} ! Estamos felices de que nos visites`);
            window.location.href ="cajero.html";
        }
    });

    if (!encontrado) {
        alert("Verifica que tus datos son correctos");
    }
});

/* Consultar Saldo */

function consultarSaldo(event) {

    event.preventDefault ();

    const usuarioCajero = document.getElementById("emailCajero").value;
    const usuarioOperacion = usuarios.find(u => u.email === usuarioCajero);
    
    document.getElementById("resultadosOperacion").textContent = `Tu saldo actual es $${usuarioOperacion.saldo}`;


}

/* Ingresar Monto */

function ingresarMonto(event) {

    event.preventDefault ();

    const usuarioCajero = document.getElementById("emailCajero").value;
    const ingresoMonto = parseFloat (prompt("¿Cuánto deseas ingresar? Por favor solo coloca números"));

    if (isNaN(ingresoMonto) || ingresoMonto <= 0) {
        alert("Por favor ingresa un monto válido.");
        return;
    }

    const usuarioOperacion = usuarios.find(u => u.email === usuarioCajero);

    if (usuarioOperacion.saldo + ingresoMonto > 990) {
        alert("No puedes tener más de $990 en tu cuenta. Lo lamento.");
        return;
    }

    usuarioOperacion.saldo += ingresoMonto;
    consultarSaldo(event);
    
}


/* Retirar Monto */

function retirarMonto(event) {

    event.preventDefault ();

    const usuarioCajero = document.getElementById("emailCajero").value;
    const retiroMonto = parseFloat (prompt("¿Cuánto deseas retirar? Por favor solo coloca números"));

    if (isNaN(retiroMonto) || retiroMonto <= 0) {
        alert("Por favor ingresa un monto válido.");
        return;
    }

    const usuarioOperacion = usuarios.find(u => u.email === usuarioCajero);

    if (usuarioOperacion.saldo - retiroMonto < 0) {
        alert("Estas sacando más dinero del que tienes. Este banco no da préstamos. Ingresa otra cantidad a retirar");
        return;
    }

    usuarioOperacion.saldo -= retiroMonto;
    consultarSaldo(event);
    
}


