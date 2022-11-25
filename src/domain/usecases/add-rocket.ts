import { RocketModel } from '../models/rocket'

export interface AddRocketModel {
  height: object
  diameter: object
  mass: object
  first_stage: object
  second_stage: object
  engines: object
  landing_legs: object
  payload_weights: object
  flickr_images: object
  name: string
  type: string
  active: boolean
  stages: number
  boosters: number
  cost_per_launch: number
  success_rate_pct: number
  first_flight: string
  country: string
  company: string
  wikipedia: string
  description: string
  id: string
}

export interface AddRocket {
  add (rocket: AddRocketModel): Promise<RocketModel>
}
