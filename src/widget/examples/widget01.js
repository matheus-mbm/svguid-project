import { getColorIterator } from "../utils/colors/color.js";
import rects from "../utils/grids/grid01.js";

export default function (key, draw) {
    let nextColor = getColorIterator(key);

    for (let idx in rects) {
        let r = rects[idx];
        let fillColor = nextColor();
        // Desenhar quadrado
        let square = draw.rect().size(r.width, r.height).move(r.x, r.y).fill(nextColor());

        // Coordenadas dos vértices do triângulo dentro do quadrado
        let trianglePoints = [
            [r.x + r.width / 2, r.y],              // Topo central
            [r.x, r.y + r.height],                 // Inferior esquerdo
            [r.x + r.width, r.y + r.height]        // Inferior direito
        ];

        // Criar string de pontos para o triângulo
        let pointsString = trianglePoints.map(point => point.join(',')).join(' ');

        // Desenhar triângulo
        draw.polygon(pointsString).fill(fillColor);

        // Verificar se é o quadrado central
        if (r.width === 500 && r.height === 500) {
            // Calcular o tamanho dos meio quadrados
            let halfWidth = r.width;
            let halfHeight = r.height /2;

            // Desenhar meio quadrado em cima
            draw.rect(halfWidth, halfHeight).move(r.x, r.y + halfHeight).fill(nextColor());
            // Desenhar meio quadrado em baixo
            draw.rect(halfWidth, halfHeight).move(r.x, r.y).fill(nextColor());

            draw.circle(200).move(r.x + 150, r.y + 150).fill('red');
            draw.circle(200).move(r.x + 1, r.y + 150).fill('white');
        }

        
    }
}
