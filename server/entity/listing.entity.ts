export class Listing {
  // This is the entity for the listing table
  constructor() {}

  async getListing() {
    // This is the function that gets all the listings in the database
    try {
      const listings = await listingSchema.find();
      return { value: listings, ok: true };
    } catch (error: any) {
      return { value: false, ok: false, error: error.message };
    }
  }

  async createListing(body: any) {
    // This is the function that creates a new listing in the database
    try {
      const listing = new listingSchema({
        name: body.name,
        location: body.location,
        price: body.price,
        description: body.description,
      });
      await listing.save();
      return { value: listing, ok: true };
    } catch (error: any) {
      return { value: false, ok: false, error: error.message };
    }
  }
}
