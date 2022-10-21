import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paint {
    @PrimaryGeneratedColumn()
    id: number

    @Column({
        length: 50,
    })
    brandName: string;

    @Column()
    colorName: string;

    @Column()
    artistColorName: string;

    @Column('integer')
    paintId: number;

    @Column('double')
    price: number;

    @Column()
    inStock: boolean
}

enum typeOfPaint {
    acrylic = 'acrylic',
    oil = 'oil',
    metallic = 'metallic', 
    enamel = 'enamel',
    contrast = 'contrast',
    wash = 'wash',
    ink = 'ink',
}