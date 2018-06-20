export interface Restaurant {
    id: string,
    name: string,
    category: string,
    deliveryEstimate: string,
    rating: number,
    imagePath: string
    about?: string,
    hours?: string

  /*  "id"   : "bread-bakery",
    "name" : "Bread & Bakery",
    "category" : "Bakery",
    "deliveryEstimate" : "25m",
    "rating": 4.9,
    "imagePath": "assets/img/restaurants/breadbakery.png",
    "about" : "A Bread & Brakery tem 40 anos de mercado. Fazemos os melhores doces e pães. Compre e confira.",
    "hours" : "Funciona de segunda a sexta, de 8h as 23h"*/
}
