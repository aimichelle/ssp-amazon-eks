import { ArnPrincipal } from "@aws-cdk/aws-iam";

import { PlatformTeam } from '../../../lib/teams';

export class TeamPlatform extends PlatformTeam {
    constructor() {
        super({
            name: "platform",
            users: [new ArnPrincipal("arn:aws:iam::115717706081:user/superadmin")]
        })
    }
}