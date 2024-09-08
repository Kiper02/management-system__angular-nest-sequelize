import { ApiProperty } from "@nestjs/swagger";


export class TokenResponseDto {
    @ApiProperty({example: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflkJZkRUz2T4B4FmgpP0O9kikgHLrrS2U1D1z9J54A', 
        description: 'Токен доступа'
    })
    token: string;
}