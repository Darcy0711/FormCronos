import z from 'zod'

// Validacion formulario CharacterizationForm
export const CharacterizationFormSchema = z.object({

    // Date: z
    // .string()
    // .pipe(z.coerce.date())
    // .regex(/^[A-Za-z]+$/),
   
    Address: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),
    
    AffectedProcess: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres')
    .regex(/^[A-Za-z]+$/),

    OfficialName: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/, 'Solo se permiten letras'),
    
    Post: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(10, 'Solo puede escribir un limite de 50 caracteres')
    .regex(/^[A-Za-z]+$/, 'Solo se permiten letras'),

    Email: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(30, 'Solo puede escribir un limite de 30 caracteres'),
    
    DescriptionProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    ProcessProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    ReasonProblem: z
    .string()
    .min(2, 'Este campo es obligatorio'),

    WhatProblem: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres'),

    ImpactType: z
    .string()
    .min(1, 'El campo es obligatorio'),

    WhatImpact: z
    .string()
    .min(2, 'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    OperationProcess: z
    .string()
    .min(2,'Campo obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),
})
export type CharacterizationForm = z.infer<typeof CharacterizationFormSchema>