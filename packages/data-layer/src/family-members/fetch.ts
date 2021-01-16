export interface FamilyMember {
    id: string;
    name: string;
    dob: string;
    sex: string;
    primaryPhoto: string;
}

const fetchAllFamilyMembers = (familyId: string): FamilyMember[] | undefined => {
    const query = `select id, name, dob, sex, primaryPhoto from family where id = ${familyId}`;
    
    // do db fetch

    return [{
        id: "123",
        name: "Joseph",
        dob: "1901-01-01",
        sex: "M",
        primaryPhoto: "/images/family/joseph/img12345.jpg"
    }];
}

const fetchFamilyMember = (memberId: string): FamilyMember | undefined => {
    const query = `select id, name, dob, sex, primaryPhoto from family where id = ${memberId}`;

    // do db fetch

    return ({
        id: "123",
        name: "Joseph",
        dob: "1901-01-01",
        sex: "M",
        primaryPhoto: "/images/family/joseph/img12345.jpg"
    });
}

export const familyMember = {
    fetchAllFamilyMembers,
    fetchFamilyMember,
}