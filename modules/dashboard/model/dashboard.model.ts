export type CmsTone = 'default' | 'success' | 'warning' | 'info' | 'danger'

export interface DashboardStat {
  label: string
  value: string
  detail: string
  icon: string
  tone?: CmsTone
}

export interface DashboardContentItem {
  id: string | number
  title: string
  category: string
  status: string
  tone: Exclude<CmsTone, 'default'>
  updated: string
  author: string
}

export interface DashboardData {
  stats: DashboardStat[]
  activity: number[]
  recentContents: DashboardContentItem[]
}
