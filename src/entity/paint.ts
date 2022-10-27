import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Paint {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    name: string
    
    @Column()
    description: string

    @Column()
    colorCode: string

    @Column({
        length: 100
    })
    paintType: string
}