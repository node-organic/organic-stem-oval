class User {} // TODO: Override this based on your needs

export default class CurrentUser {
  constructor(plasma, dna) {
    plasma.currentUser = new User()
  }
}
