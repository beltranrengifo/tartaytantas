---
title: Tartaytantas | Obrador de tartas en Aravaca, Madrid
description: Somos un pequeño obrador de tartas inspiradas en recetas clásicas, con referencias a la pastelería americana de mediados del S XX
slides:
  - image: tartaytantas-carousel-image-1.jpg
    imageAlt: Tartaytantas Obrador de tartas en Madrid
    content: ''
    button:
      text: ''
      link: ''
      target: ''
  - image: tartaytantas-carousel-image-2.jpg
    imageAlt: Tartaytantas Obrador de tartas en Madrid
    content: ''
    button:
      text: ''
      link: ''
      target: ''
  - image: tartaytantas-carousel-image-3.jpg
    imageAlt: Tartaytantas Obrador de tartas en Madrid
    content: ''
    button:
      text: ''
      link: ''
      target: ''
introText:
  width: '1/2'
  height: '3/4-screen'
  tag: 'h1'
  background: 'tertiary'
  contentWidth: 'sm'
  decoration: true
  decorationColor: 'primary'
introImage:
  image: 'tartaytantas-espinacas-frambuesa.jpg'
  imageAlt: 'Tarta de bizcocho de espinacas con frambuesas'
  width: '1/2'
  height: '3/4-screen'
claimA:
  decoration: false
  tag: 'h2'
  width: '1/2'
  height: '1/3-screen'
  contentWidth: 'md'
  background: 'secondary-light'
claimB:
  decoration: false
  tag: 'h2'
  width: '1/2'
  height: '1/3-screen'
  contentWidth: 'md'
  background: 'secondary-light'
cakes:
  image: 'tartaytantas-composicion-frontal-lineas.jpg'
  imageAlt: 'Composición de tartas inspirada en Wayne Thiebaud.'
  width: '1/1'
  height: '1/3-screen'
  align: 'top'
moreText:
  decoration: true
  decorationColor: 'white'
  tag: 'h2'
  width: '1/3'
  height: '3/4-screen'
  contentWidth: 'sm'
  background: 'secondary'
  color: 'white'
moreImage:
  image: 'tartaytantas-mas-que-tartas.jpg'
  imageAlt: 'En TartayTantas no sólo se venden tartas. Bizcochos, brownies, galletas, tartaletas y tantas otras recetas.'
  width: '2/3'
  height: '3/4-screen'
  align: 'center'
carrotImage:
  image: 'tartaytantas-tarta-zanahoria.jpg'
  imageAlt: 'Tarta de zanahoria artesana en Tartaytantas, en Aravaca, Madrid'
  width: '2/3'
  height: '3/4-screen'
  align: 'center'
carrotText:
  decoration: false
  decorationColor: 'white'
  tag: 'h2'
  width: '1/3'
  height: '3/4-screen'
  contentWidth: 'sm'
  background: 'tertiary'
  color: 'base'
uniqueText:
  decoration: true
  decorationColor: 'primary'
  tag: 'h2'
  width: '1/2'
  height: '3/4-screen'
  contentWidth: 'sm'
  background: 'tertiary'
uniqueImage:
  image: 'tartaytantas-tartas-unicas.jpg'
  imageAlt: 'En Tartaytantas ofrecemos tartas únicas hechas a diario en el obrador'
  width: '1/2'
  height: '3/4-screen'
socialTitle:
  titleTag: 'h2'
  transform: 'uppercase'
  align: 'center'
  font: 'sans'
  subtitleTag: 'h3'
  maxWidth: 'none'
  paddingTop: 'pt-40'
  paddingBottom: 'pb-16'
socialImages:
  images:
    - src: tartaytantas-grid-image-1.jpg
      alt: Tarta de frambuesas
    - src: tartaytantas-grid-image-2.jpg
      alt: Tarta de limón
    - src: tartaytantas-grid-image-3.jpg
      alt: Cheesecake
  columns: 3
  gap: 12
moreCakesTitle:
  titleTag: 'h2'
  width: '1/3'
  transform: 'uppercase'
  align: 'left'
  font: 'sans'
  subtitleTag: 'p'
  maxWidth: 'none'
  height: '1/2-screen'
moreCakesImages:
  width: '2/3'
  height: '1/2-screen'
  images:
    - src: tartaytantas-mostrador-1.jpg
      alt: Mostrador de Tartaytantas
    - src: tartaytantas-mostrador-2-detalle.jpg
      alt: Detalle del mostrador de Tartaytantas con una foto de Mamá Amelia
  columns: 2
  gap: 12
---

<container tag="section" fullwidth>
  <hero :slides="slides" logo="tartaytantas.svg" logo-alt="Tartaytantas Logo"></hero>
</container>

<container tag="section" fullwidth flex>
  <text-block v-bind="introText">
    Tartaytantas somos un pequeño obrador de tartas inspiradas en recetas clásicas, con referencias a la pastelería americana de mediados del siglo XX.
  </text-block>
  <image-block v-bind="introImage"></image-block>
</container>

<container tag="section" fullwidth flex>
  <text-block v-bind="claimA">
    Apostamos por la calidad en la materia prima y el diseño de pasteles con un aspecto sencillo pero cuidado.
  </text-block>
  <text-block v-bind="claimB">
    Nuestra identidad gráfica, es un homenaje a la obra de Wayne Thiebaud. Su delicioso trabajo, nos inspira. <a target="_blank" href="https://google.es">Puedes verlo aquí.</a>
  </text-block>
</container>

<container tag="section" fullwidth flex>
  <image-block v-bind="cakes"></image-block>
</container>

<container tag="section" fullwidth flex>
  <text-block v-bind="moreText">
    <span class="block mb-6">
      Y no sólo tartas. También ofrecemos bizcochos, brownies, galletas, tartaletas
      <span class="text-primary">y tantas</span> otras recetas.</span>
      <span class="block mb-6">No dudes en preguntarnos.</span>
  </text-block>
  <image-block v-bind="moreImage"></image-block>
</container>

<container tag="section" fullwidth flex>
  <image-block v-bind="carrotImage"></image-block>
  <text-block v-bind="carrotText">
    <span class="block mb-6">Nuestra Tarta de Zanahoria, es uno de nuestros productos estrella.</span>
    <span class="block mb-6">Cada vez son más los restaurantes de la Capital que la incluyen en su carta de postres, junto a otros de nuestros productos.</span>
    <span class="block mb-6">Encarga la tuya, <a href="https://google.es" target="_blank">aquí</a>.</span>
  </text-block>
</container>

<container tag="section" fullwidth flex>
  <text-block v-bind="uniqueText">
    Nuestro trabajo es artesano, producimos para particulares, eventos y restaurantes. Cada tarta es única.
  </text-block>
  <image-block v-bind="uniqueImage"></image-block>
</container>

<container tag="section" fullwidth>
  <title-block v-bind="socialTitle">
    <a href="https://instagram.com" class="no-decoration">Síguenos en Instagram</a>
    <template v-slot:subtitle>
      <a href="https://instagram.com" class="no-decoration">@tartaytantas</a>
    </template>
  </title-block>
  <image-grid v-bind="socialImages"></image-grid>
</container>

<container tag="section" boxed flex>
  <title-block v-bind="moreCakesTitle">
    Todas nuestras tartas
    <template v-slot:subtitle>
      <span class="block">Trabajamos de manera artesana.</span>
      <span class="block">Diseñamos tartas sencillas y deliciosas.</span>
    </template>
  </title-block>
  <image-grid v-bind="moreCakesImages" class="mt-24"></image-grid>
</container>
