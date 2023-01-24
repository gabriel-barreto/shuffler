import { z } from 'zod'

function memberNameSanitizer(memberName: string) {
  const [rawNum, rawName] = memberName.split('-')
  if (rawName.trim() === '') return ''
  const num = rawNum.replace(/\D+/g, '').padStart(2, '0').trim()
  const name = rawName.replace(/\s+/g, '').trim()
  return `${num} - ${name}`
}

function castTransformer(rawCast: string) {
  const rawMembers = rawCast.split('\n')
  return rawMembers
    .map((rawMember: string) => {
      if (!/^\d/.test(rawMember)) return ''
      return memberNameSanitizer(rawMember)
    })
    .filter((e: string) => e)
}

export const castValidator = z
  .string()
  .refine((value: string) => castTransformer(value).length > 11, {
    message: 'Você vai precisar encontrar mais craques!'
  })
  .transform(castTransformer)
