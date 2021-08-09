import {config} from '@keystone-next/keystone/schema';
import {statelessSessions} from '@keystone-next/keystone/session';
import {createAuth} from '@keystone-next/auth';
import 'dotenv/config';

import {lists} from './schema';

let sessionSecret = process.env.SESSION_SECRET;

if (!sessionSecret) {
    if (process.env.NODE_ENV === 'production') {
        throw new Error(
            'The SESSION_SECRET environment variable must be set in production'
        );
    } else {
        sessionSecret = 'super session secret super session secret';
    }
}

let sessionMaxAge = 60 * 60 * 24 * 30; // 30 days

const {withAuth} = createAuth({
    listKey: 'User',
    identityField: 'email',
    secretField: 'password',
    sessionData: 'name',
    initFirstItem: {
        fields: ['name', 'email', 'password'],
    },
});

const session = statelessSessions({
    maxAge: sessionMaxAge,
    secret: sessionSecret,
});

export default withAuth(
    config({
        server: {
            cors: {
                origin: process.env.FRONTEND_URL,
                credentials: true,
            },
            port: 3001,
            healthCheck: true,
        },
        db: {
            adapter: 'prisma_postgresql',
            url: process.env.DATABASE_URL || 'postgres://user:@localhost:5432/webstore',
            async onConnect(ctx) {
                // TODO: Add data seeding
            }
        },
        ui: {
            isAccessAllowed: (context) => !!context.session?.data,
        },
        lists,
        session,
    })
);
