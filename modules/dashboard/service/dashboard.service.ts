import { dashboardRepository } from '../repository/dashboard.repository'

export const dashboardService = {
  getDashboard() {
    return dashboardRepository.getDashboard()
  }
}
