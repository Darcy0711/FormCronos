import z from 'zod'

// Validacion formulario ProcessForm
export const ProcessFormSchema = z.object({
    Address: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    AffectedProcess: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(10, 'Solo puede escribir un limite de 10 caracteres')
    .regex(/^[A-Za-z]+$/),

    DescriptionSolution: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/),

    Resources: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/),

    Collaborators: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres')
    .regex(/^[A-Za-z]+$/),
    
    UpdatingProcesses: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(20, 'Solo puede escribir un limite de 20 caracteres'),

    TechnologicalResources: z
    .string()
    .min(2, 'Este campo es obligatorio ')
    .max(10, 'Solo puede escribir un limite de 10 caracteres'),

    TechnologicalTools: z
    .string()
    .min(2, 'Este campo es obligatorio')
    .max(10,'Solo puede escribir un limite de 10 caracteres')
})

export type ProcessForm = z.infer<typeof ProcessFormSchema>