{pkgs, ...}: {
  env = {
    GREET = "Development environment";
  };

  # JavaScript language support.
  languages.javascript = {
    enable = true;
    package = pkgs.nodejs_24;
    pnpm = {
      enable = true;
      install.enable = true;
    };
  };

  # Core development tools.
  packages = with pkgs; [
    just
    git
  ];

  # Git hooks.
  git-hooks = {
    hooks = {
      gitlint = {
        enable = true;
        description = "Run gitlint to check commit messages";
        stages = ["commit-msg"];
      };

      markdownlint = {
        enable = true;
        description = "Run markdownlint to check Markdown files";
        settings.configuration = {
          MD013.line_length = 120;
        };
      };

      alejandra = {
        enable = true;
        description = "Run the Alejandra formatter on Nix files";
      };
    };
  };

  # Extra configuration files to symlink.
  files = {
    ".gitlint".ini = {
      general = {
        contrib = "contrib-title-conventional-commits";
        ignore = "body-is-missing,body-min-length";
      };

      title-max-length.line-length = 120;
      body-max-line-length.line-length = 120;
    };
  };

  # Enter shell task.
  enterShell = ''
    echo $GREET
  '';
}
