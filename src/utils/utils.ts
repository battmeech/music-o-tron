import { GuildMember, Message, PermissionString } from 'discord.js';
import config from '../config.json';

/**
 * @description Parse the message into a command and a list of arguments which have been provided
 * e.g. if we have the message "+say Is this the real life?" , we'll get the following:
 * command = say
 * args = ["Is", "this", "the", "real", "life?"]
 * @param message - this is the Discord message
 */
export function parseMessage(
    message: Message
): { command: string; args: string[] } {
    const args = message.content
        .slice(config.prefix.length)
        .trim()
        .split(/ +/g);
    const command = args.shift()!.toLowerCase();

    return { command, args };
}

/**
 * Check the user has permission to run a certain command
 * @param member the member to check permissions of
 * @param permissions permissions to be checked against
 */
export function checkUserCanRun(
    member: GuildMember,
    permissions?: PermissionString[],
    roles?: string[]
): boolean {
    let canRun: boolean = true;

    // If there is a role check, and the user is not an admin, ensure they have correct roles
    if (roles && !member.hasPermission('ADMINISTRATOR')) {
        canRun = member.roles.cache.some((role) =>
            roles.includes(role.name.toLowerCase())
        );
    }

    // If canRun is still true, also check they have any required permissions
    if (permissions && canRun) {
        canRun = member.hasPermission(permissions);
    }

    return canRun;
}
