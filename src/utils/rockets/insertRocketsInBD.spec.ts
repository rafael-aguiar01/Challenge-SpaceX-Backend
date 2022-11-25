import { InsertRocketsInDB } from './insertRocketsInBD'

describe('Insert Rockets In BD', () => {
  test('Should return 200 if load data success', async () => {
    const sut = new InsertRocketsInDB()
    await sut.run()
  })
})
