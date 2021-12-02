import { Test } from "@/interfaces/Test";
import { Patient } from "@/interfaces/Patient";
import { User } from "@/interfaces/User";

export interface Order {
    visit_type_id: number,
    requesting_location_id: number,
    requesting_physician: string,
    specimen_type_id: number,
    tests: Array<Test>,
    patient:Patient,
    user: User,
}

