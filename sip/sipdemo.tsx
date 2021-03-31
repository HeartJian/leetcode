import { SimpleUser, SimpleUserOptions,SimpleUserDelegate } from "sip.js/lib/platform/web";
import react from 'react'
import {  URI } from 'sip.js';
import SIP_CONFIG from './config';

const { USER_AGENT, SIP_CONNECT_DOMAIN, SIP_CONNECT_PORT, SIP_WS_DOMAIN, SIP_WS_PORT, SIP_WS_PROTOCOL } = SIP_CONFIG;

export default class index extends react.Component {
    componentDidMount() {
        this.main();        
    }

    main = async ()=>{
        console.log("into sip demo ================================================");
        const server = `${SIP_WS_PROTOCOL}://${SIP_WS_DOMAIN}:${SIP_WS_PORT}`;
        const uri = new URI('sip', USER_AGENT, SIP_CONNECT_DOMAIN, SIP_CONNECT_PORT);

        const delegate: SimpleUserDelegate = {
            onCallReceived: async () => {
              console.log('Incoming Call!');
              await this.simpleUser?.answer();
            }
          };
        const options: SimpleUserOptions = {
            aor:uri.toString(),
            delegate,
            media: {
                local: {
                    video: this.video1
                },
            remote: {
                    video: this.video2
                }
            },
            userAgentOptions: {
                authorizationUsername: USER_AGENT,
                authorizationPassword: '1234',
                uri,
                transportOptions: {
                  server: `${SIP_WS_PROTOCOL}://${SIP_WS_DOMAIN}:${SIP_WS_PORT}`
                }
            }
        };
        this.simpleUser = new SimpleUser(server, options);

         // Connect to server
        await this.simpleUser.connect();

        // Register to receive inbound calls
        await this.simpleUser.register();
    }

    call =()=>{
        console.log("call")
        this.simpleUser?.call(`sip:9334@${SIP_CONNECT_DOMAIN}:${SIP_CONNECT_PORT}`);
    }

    video1: any;
    video2: any;
    simpleUser? :SimpleUser;

    render() {
        return (<div>
            <video ref={instance => this.video1 = instance} id="remoteVideo"></video>
            <video ref={instance => this.video2 = instance} id="localVideo" muted={true}></video>
            <button onClick={this.call}>呼叫</button>
        </div>)
    }
}