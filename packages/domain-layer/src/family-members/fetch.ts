import { FamilyMember, familyMember as dlFamilyMember } from "@album/datalayer";

const getAllFamilyMembers = (familyId: string): FamilyMember[] => dlFamilyMember.fetchAllFamilyMembers(familyId);

const getFamilyMember = (familyMemberId: string): FamilyMember => dlFamilyMember.fetchFamilyMember(familyMemberId);

export const familyMember = {
    getAllFamilyMembers,
    getFamilyMember
}
