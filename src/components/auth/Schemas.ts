import * as z from 'zod'

export const LoginSchema = z.object({
    email: z.string().min(1, {message: "Pamiršote įvesti el. pašto adresą"}).email({message: "Netinkamas el. pašto adreso formatas"}),
    password: z.string().min(1, {message: "Pamiršote įrašyti slaptažodį"}),
});

export const RegisterSchema = z.object({
  name: z.string().min(3, {message: "Pamiršote įrašyti savo vardą"}),
  email: z.string().min(1, {message: "Pamiršote įrašyti el. pašto adresą"}).email({message: "Neteisingas el. pašto adreso formatas"}),
  password: z.string().min(6, {message: "Slaptažodį turi sudaryti ne mažiau kaip 6 simboliai"})
})