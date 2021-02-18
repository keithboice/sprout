import { Ability }        from "@casl/ability";
import { initialAbility } from "./config";

//  Read ability from localStorage
// * Handles auto fetching previous abilities if already logged in contacts
// ? You can update this if you store contacts abilities to more secure place
// ! Anyone can update localStorage so be careful and please update this
const userData = JSON.parse( localStorage.getItem( "userData" ) );
const existingAbility = userData ? userData.ability : null;

export default new Ability( existingAbility || initialAbility );
