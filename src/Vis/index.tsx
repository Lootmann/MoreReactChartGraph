import React from "react";

function VisIndex() {
  return (
    <div className="h-full w-full p-4 flex flex-col justify-between items-center">
      <div className="flex-1 h-full w-full flex justify-between">
        <pre>
          <code>
            ❯ npm install -D react-vis
            <br />
            npm ERR! code ERESOLVE
            <br />
            npm ERR! ERESOLVE unable to resolve dependency tree
            <br />
            npm ERR!
            <br />
            npm ERR! While resolving: 24.1.more-react-charts@0.0.0
            <br />
            npm ERR! Found: react@18.2.0
            <br />
            npm ERR! node_modules/react
            <br />
            npm ERR! react@"^18.2.0" from the root project
            <br />
            npm ERR!
            <br />
            npm ERR! Could not resolve dependency:
            <br />
            npm ERR! peer react@"15.3.0 - 16.x" from react-vis@1.11.12
            <br />
            npm ERR! node_modules/react-vis
            <br />
            npm ERR! dev react-vis@"*" from the root project
            <br />
            npm ERR!
            <br />
            npm ERR! Fix the upstream dependency conflict, or retry
            <br />
            npm ERR! this command with --force, or --legacy-peer-deps
            <br />
            npm ERR! to accept an incorrect (and potentially broken) dependency
            resolution.
          </code>
        </pre>
      </div>
    </div>
  );
}

export default VisIndex;
