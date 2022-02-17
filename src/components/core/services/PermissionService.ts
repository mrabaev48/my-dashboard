import {Permission} from "../models/Permission";
const userPermissions = [Permission.Read, Permission.Write];

export class PermissionService {
    public static hasPermission(permission: Permission): boolean {
        return userPermissions.includes(permission);
    }

    public static hasPermissions(permissions: Permission []): boolean {
        const res = permissions.every(x => {
            return userPermissions.includes(x);
        });

        return res;
    }
}