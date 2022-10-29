const jsStats = require('js-stats')

const router = require('express').Router()

router.post('/intervaloConfianzaPoblacionDesconocida', (req, res) => {
    try {
        const { X, S, n, alfa } = req.body
        console.log(req.body)
        const calc = intervaloMediaPoblacionDesconocidaMuestraGrande(X, S, n, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloConfianzaPoblacionConocidaVarianzaConocida', (req, res) => {
    try {
        const { X, S, n, alfa } = req.body
        console.log(req.body)
        const calc = intervaloMediaPoblacionNormalVarianzaConocida(X, S, n, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloMediaPoblacionNormalVarianzaDesconocidaMuestraPeque', (req, res) => {
    try {
        const { X, S, n, alfa } = req.body
        console.log(req.body)
        const calc = intervaloMediaPoblacionNormalVarianzaDesconocidaMuestraPeque(X, S, n, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloMediaPoblacionDesconocidaMuestraGrande', (req, res) => {
    try {
        const { X, S, n, alfa } = req.body
        console.log(req.body)
        const calc = intervaloMediaPoblacionDesconocidaMuestraGrande(X, S, n, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloProporcionMuestraGrande', (req, res) => {
    try {
        const { P, n, alfa } = req.body
        console.log(req.body)
        const calc = intervaloProporcionMuestraGrande(P, n, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloDiferenciaProporcionMuestraGrande', (req, res) => {
    try {
        const { P1, P2, n1, n2, alfa } = req.body
        console.log(req.body)
        const calc = intervaloDiferenciaProporcionMuestraGrande(P1, P2, n1, n2, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloDiferenciaMediaVarianzaConocidaMuestraGrande', (req, res) => {
    try {
        const { X, Y, n1, n2, s1, s2, alfa } = req.body
        console.log(req.body)
        const calc = intervaloDiferenciaMediaVarianzaConocidaMuestraGrande(X, Y, n1, n2, s1, s2, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloDiferenciaMediaVarianzadesconocidaIgualesMuestraPeque', (req, res) => {
    try {
        const { X, Y, n1, n2, s1, s2, alfa } = req.body
        console.log(req.body)
        const calc = intervaloDiferenciaMediaVarianzadesconocidaIgualesMuestraPeque(X, Y, n1, n2, s1, s2, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloDiferenciaMediaVarianzadesconocidaDiferentesMuestraPeque', (req, res) => {
    try {
        const { X, Y, n1, n2, s1, s2, alfa } = req.body
        console.log(req.body)
        const calc = intervaloDiferenciaMediaVarianzadesconocidaDiferentesMuestraPeque(X, Y, n1, n2, s1, s2, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloVarianzaPoblacionNormal', (req, res) => {
    try {
        const { X, Y, n1, n2, s1, s2, alfa } = req.body
        console.log(req.body)
        const calc = intervaloVarianzaPoblacionNormal(X, Y, n1, n2, s1, s2, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

router.post('/intervaloRazonVarianzas', (req, res) => {
    try {
        const { X, Y, n1, n2, s1, s2, alfa } = req.body
        console.log(req.body)
        const calc = intervaloRazonVarianzas(X, Y, n1, n2, s1, s2, alfa)
        console.log(calc)
        res.json({
            ok: true,
            calc
        })
    } catch (error) {
        res.status(500).json({
            ok: false,
            msg: 'Error en el cálculo'
        })
    }
})

module.exports = router


function intervaloMediaPoblacionNormalVarianzaConocida(X, S, n, alfa) {
    let ZInv = obtenerZinvAlfaMedios(alfa)
    return { 'Inferior': X - ZInv * (S / (n ** (1 / 2))), 'Superior': X + ZInv * (S / (n ** (1 / 2))) }
}

function intervaloMediaPoblacionNormalVarianzaDesconocidaMuestraPeque(X, S, n, alfa) {
    let inv = obtenertinvAlfaMedios(alfa, n - 1)
    return { 'Inferior': X - inv * (S / (n ** (1 / 2))), 'Superior': X + inv * (S / (n ** (1 / 2))) }
}

function intervaloMediaPoblacionDesconocidaMuestraGrande(X, S, n, alfa) {
    let ZInv = obtenerZinvAlfaMedios(alfa)
    return { 'Inferior': X - ZInv * (S / (n ** (1 / 2))), 'Superior': X + ZInv * (S / (n ** (1 / 2))) }
}

function intervaloProporcionMuestraGrande(P, n, alfa) {
    let ZInv = obtenerZinvAlfaMedios(alfa)
    return { 'Inferior': P - ZInv * ((P * (1 - P) / n) ** (1 / 2)), 'Superior': P + ZInv * ((P * (1 - P) / n) ** (1 / 2)) }
}
function intervaloDiferenciaProporcionMuestraGrande(P1, P2, n1, n2, alfa) {
    let ZInv = obtenerZinvAlfaMedios(alfa)
    return { 'Inferior': (P1 - P2) - ZInv * ((P1 * (1 - P1) / n1 + P2 * (1 - P2) / n2) ** (1 / 2)), 'Superior': (P1 - P2) + ZInv * ((P1 * (1 - P1) / n1 + P2 * (1 - P2) / n2) ** (1 / 2)) }
}

function intervaloDiferenciaMediaVarianzaConocidaMuestraGrande(X, Y, n1, n2, s1, s2, alfa) {
    let ZInv = obtenerZinvAlfaMedios(alfa)
    return { 'Inferior': (X - Y) - ZInv * ((s1 ** 2 / n1 + s2 ** 2 / n2) ** (1 / 2)), 'Superior': (X - Y) + ZInv * ((s1 ** 2 / n1 + s2 ** 2 / n2) ** (1 / 2)) }
}
function intervaloDiferenciaMediaVarianzadesconocidaIgualesMuestraPeque(X, Y, n1, n2, s1, s2, alfa) {
    let Inv = obtenertinvAlfaMedios(alfa, n1 + n2 - 2)
    let sp = (((n1 - 1 * s1 ** 2 + (n2 - 1) * s2 ** 2)) / (n1 + n2 - 2)) ** (1 / 2)
    return { 'Inferior': (X - Y) - Inv * sp * ((1 / n1 + 1 / n2) ** (1 / 2)), 'Superior': (X - Y) + Inv * sp * ((1 / n1 + 1 / n2) ** (1 / 2)) }
}
function intervaloDiferenciaMediaVarianzadesconocidaDiferentesMuestraPeque(X, Y, n1, n2, s1, s2, alfa) {
    let v = (s1 ** 2 / n1 + s2 ** 2 / n2) ** 2 / ((s1 ** 2) ** 2 / (n1 - 1) + (s2 ** 2) ** 2 / (n2 - 1))
    let Inv = obtenertinvAlfaMedios(alfa, v)

    return { 'Inferior': (X - Y) - Inv * ((s1 ** 2 / n1 + s2 ** 2 / n2) ** (1 / 2)), 'Superior': (X - Y) + Inv * ((s1 ** 2 / n1 + s2 ** 2 / n2) ** (1 / 2)) }
}
function intervaloVarianzaPoblacionNormal(S, n, alfa) {
    let invMenor = obtenerChiAlfa(alfa / 2, n - 1)
    let invMayor = obtenerChiAlfa(1 - (alfa / 2), n - 1)
    return { 'Inferior': (n - 1) * S ** 2 / invMenor, 'Superior': (n - 1) * S ** 2 / invMayor }
}
function intervaloRazonVarianzas(S1, S2, n1, n2, alfa) {
    let invMenor = obtenerFinvAlfa(alfa / 2, n1 - 1, n2 - 1)
    let invMayor = obtenerFinvAlfa(alfa / 2, n2 - 1, n1 - 1)
    return { 'Inferior': S1 ** 2 / (invMenor * S2 ** 2), 'Superior': S1 ** 2 / S2 ** 2 * invMayor }
}
function obtenerChiAlfa(alfa, n) {//ESTE METODO AUN NO ESTA CORRECTAMENTE IMPLEMENTADO BUSCAR LIBRERIA O FORMA DE HACERLO
    var cs_distribution = new jsStats.ChiSquareDistribution(n);
    let alfaDerecha = 1 - alfa // como el resultado esta en cola derecha, se considera el complemento
    return invChi(cs_distribution, alfaDerecha, n)
}
function invChi(chi, alfa, n) {
    let valorActual = chi.cumulativeProbability(n)
    while ((Math.abs(valorActual - alfa) / alfa) * 100 > 0.00001) {
        if (valorActual > alfa) {
            n = n - n * (valorActual - alfa)
            valorActual = chi.cumulativeProbability(n)
        }
        else {
            n = n + n * Math.abs(valorActual - alfa)
            valorActual = chi.cumulativeProbability(n)
        }
    }
    return n
}
function invF(F, alfa, n1, n2) {
    n = n1 / n2
    let valorActual = F.cumulativeProbability(n)
    while ((Math.abs(valorActual - alfa) / alfa) * 100 > 0.00001) {
        if (valorActual > alfa) {
            n = n - n * (valorActual - alfa)
            valorActual = F.cumulativeProbability(n)
        }
        else {
            n = n + n * Math.abs(valorActual - alfa)
            valorActual = F.cumulativeProbability(n)
        }
    }
    return n
}
function obtenerFinvAlfa(alfa, n1, n2) {//ESTE METODO AUN NO ESTA CORRECTAMENTE IMPLEMENTADO BUSCAR LIBRERIA O FORMA DE HACERLO
    var f_distribution = new jsStats.FDistribution(n1, n2);
    let alfaDerecha = 1 - alfa // como el resultado esta en cola derecha, se considera el complemento
    return invF(f_distribution, alfaDerecha, n1, n2)
}
function obtenerZinvAlfaMedios(alfa) {
    let Z = new jsStats.NormalDistribution(0, 1);//Normal estandar
    let alfaMedios = 1 - (alfa / 2) // como el resultado esta en cola derecha, se considera el complemento
    return Z.invCumulativeProbability(alfaMedios)
}
function obtenertinvAlfaMedios(alfa, n) {
    let t = new jsStats.TDistribution(n)
    let alfaMedios = 1 - (alfa / 2) // como el resultado esta en cola derecha, se considera el complemento
    return t.invCumulativeProbability(alfaMedios)
}


/* console.log(intervaloDiferenciaMediaVarianzaConocidaMuestraGrande(159.001,150.143,10,15,2.5,2.8,0.05))
console.log(obtenerFinvAlfa(0.025,60,30))   */