import { z } from 'zod'

function castTransformer(rawCast: string) {
  const rawMembers = rawCast.split('\n')
  return rawMembers
    .map((rawMember: string) => {
      if (!/^\d/.test(rawMember)) return ''
      return rawMember.replace(/\d|\W/g, '')
    })
    .filter((e: string) => e)
}

export const castValidator = z
  .string()
  .refine((value: string) => castTransformer(value).length > 11, {
    message: 'Você vai precisar encontrar mais craques!'
  })
  .transform(castTransformer)
