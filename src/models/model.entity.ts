import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Model {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    brandName: string;

    @Column()
    colorName: string;

    @Column()
    artistColorName: string;

    @Column()
    paintId: number;

    @Column()
    price: number;

    
}