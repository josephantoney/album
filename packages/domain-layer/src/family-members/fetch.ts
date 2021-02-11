import { FamilyMember, familyMember as dlFamilyMember } from '@album/datalayer';

const getAllFamilyMembers = (familyId: string): FamilyMember[] | undefined =>
    dlFamilyMember.fetchAllFamilyMembers(familyId);

const getFamilyMember = (familyMemberId: string): FamilyMember | undefined =>
    dlFamilyMember.fetchFamilyMember(familyMemberId);

export const familyMember = {
    getAllFamilyMembers,
    getFamilyMember,
};
