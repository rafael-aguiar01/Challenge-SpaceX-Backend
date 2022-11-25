import insertLaunches = require('./insertLaunches')
import insertRockets = require('./insertRockets')

export class ManagerCron {
  private readonly jobs

  constructor () {
    this.jobs = [insertLaunches, insertRockets]
  }

  run (): void{
    this.jobs.forEach(job => job.start())
  }
}
