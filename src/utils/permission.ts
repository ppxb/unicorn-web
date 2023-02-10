import type { Permission } from '@/pages/login/model'

export const permissionsToArray = (permissions: Permission[]): string[] => {
  const res: string[] = []
  for (let i = 0; i < permissions.length; i++) {
    const { id, operation } = permissions[i]
    res.push(`/${id}`)
    for (let j = 0; j < operation.length; j++) {
      res.push(`/${id}/${operation[j]}`)
    }
  }
  console.log(res)

  return res
}
