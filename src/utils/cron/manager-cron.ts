import insertLaunches = require('./insert-launches')
import insertRockets = require('./insert-rockets')

export class ManagerCron {
  private readonly jobs

  constructor () {
    this.jobs = [insertLaunches, insertRockets]
  }

  run (): void{
    this.jobs.forEach(job => job.start())
  }
}
