export class Paints {
    // "vallejo", games workshop
    brandName: string;
    // "bugmans glow"
    colorName: string;
    // actual technical pigment name CADMIUM RED 17
    artistColorName: string;
    // vallejo - ice yellow; moddel-117
    paintId: number;

    typeOfPaint: tyeOfPaint;

    price: number;
}

enum tyeOfPaint {
    acrylic = 'acrylic',
    oil = 'oil',
    metallic = 'metallic', 
    enamel = 'enamel',
    contrast = 'contrast',
    wash = 'wash',
    ink = 'ink',

}