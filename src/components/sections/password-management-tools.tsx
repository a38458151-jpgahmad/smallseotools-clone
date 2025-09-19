import React from 'react';
import { KeyRound, Gauge, Wand2 } from 'lucide-react';

const PasswordManagementTools = () => {
  const tools = [
    {
      name: 'Password Encryption Utility',
      href: 'https://smallseotools.com/password-encryption-utility/',
      icon: <KeyRound />,
    },
    {
      name: 'Password Strength Checker',
      href: 'https://smallseotools.com/password-strength-checker/',
      icon: <Gauge />,
    },
    {
      name: 'Password Generator',
      href: 'https://smallseotools.com/password-generator/',
      icon: <Wand2 />,
    },
  ];

  return (
    <div className="bg-card border rounded-lg p-4 shadow-sm">
      <div className="w-full">
        <h2 className="text-center text-3xl font-semibold text-foreground mt-2 mb-3">
          <a href="https://smallseotools.com/password-management-tools/" className="text-foreground no-underline hover:text-primary">
            Password Management Tools
          </a>
        </h2>
        <p className="text-center text-sm text-muted-foreground leading-6 max-w-2xl mx-auto mb-8 px-5">
          Create a secure password, check password strength or encrypt a password; all tools related to password management are readily available.
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-4">
        {tools.map((tool) => (
          <a
            key={tool.name}
            href={tool.href}
            className="group flex flex-col items-center text-center p-3 rounded-lg transition-shadow duration-200 hover:shadow-md w-[180px]"
          >
            <div className="flex items-center justify-center w-12 h-12 bg-accent rounded-md border mb-3">
              {React.cloneElement(tool.icon, { className: 'w-6 h-6 text-accent-foreground' })}
            </div>
            <span className="text-base font-medium text-foreground text-center leading-tight">
              {tool.name}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default PasswordManagementTools;