import { userEntity } from "~/server/entity/user.entity";
import { UserDto } from "~/server/entity/dto/user.dto";

// CONTROLLER LAYER FOR POST delete PROFILE
export default defineEventHandler(async (event) => {
  const controller = new deleteUController();

  return await controller.deleteU(event);
});

// Gets data driectly from boundary layer
// Does business logic here, and constructs entity object to interact with database
class deleteUController {
  constructor() {}

  async deleteU(event: any) {
    const body: UserDto = await readBody(event);
    
    const userRepo = new userEntity();
    return await userRepo.deleteU(event, body);
    
  }
}