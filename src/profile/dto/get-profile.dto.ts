import { ApiProperty } from '@nestjs/swagger'

export class ProfileDto {
  @ApiProperty({ example: 'Dron' })
  name: string

  @ApiProperty({ example: 20 })
  age: number

  @ApiProperty({ example: 'Ukraine', required: false })
  address?: string
}
