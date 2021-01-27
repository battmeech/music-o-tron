import Languages from '../messages/supportedLanguages';

export type Messages = {
    ADD_COMMAND_NAME: string;
    ADD_COMMAND_HELPFUL_DESCRIPTION: string;
    ADD_COMMAND_NO_YOUTUBE_LINK: string;
    HELP_COMMAND_NAME: string;
    HELP_COMMAND_HELPFUL_DESCRIPTION: string;
    HELP_COMMAND_EMBED_TITLE: string;
    HELP_COMMAND_EMBED_DESCRIPTION: string;
    JOIN_COMMAND_NAME: string;
    JOIN_COMMAND_HELPFUL_DESCRIPTION: string;
    JOIN_COMMAND_NO_VOICE_CHANNEL: string;
    LEAVE_COMMAND_NAME: string;
    LEAVE_COMMAND_HELPFUL_DESCRIPTION: string;
    LEAVE_COMMAND_NO_VOICE_CHANNEL: string;

    ERROR_WHEN_FETCHING_VIDEO_INFO: string;
    ERROR_WHEN_JOINING_VOICE_CHANNEL: string;
};

export type SupportedLanguage = keyof typeof Languages;
