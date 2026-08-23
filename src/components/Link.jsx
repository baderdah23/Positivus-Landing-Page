const Link = ({ text = "Label", variant, className }) => {
  /* 
        <Link variant="black" />
        <Link variant="black2" />
        <Link variant="green" />
        <Link variant="green2" />
        <Link variant="white" />
        <Link variant="white2" />
        <Link variant="simpleGreen" className="flex-row-reverse" />
        <Link variant="simpleBlack" className="flex-row-reverse" />
        <Link variant="simpleWhite" className="flex-row-reverse" />
        
    */

  const variants = {
    white: {
      circle: "#fff",
      arrow: "#191a23",
      label: "text-white",
    },
    white2: {
      circle: "#fff",
      arrow: "#b9ff66",
      label: "text-white",
    },

    black: {
      circle: "#191a23",
      arrow: "#fff",
      label: "text-primary",
    },
    black2: {
      circle: "#191a23",
      arrow: "#b9ff66",
      label: "text-primary",
    },

    green: {
      circle: "#b9ff66",
      arrow: "#191a23",
      label: "text-[#b9ff66]",
    },
    green2: {
      circle: "#b9ff66",
      arrow: "#fff",
      label: "text-[#b9ff66]",
    },

    simpleGreen: {
      circle: "transparent",
      arrow: "#B9FF66",
      label: "text-[#B9FF66]",
    },
    simpleBlack: {
      circle: "transparent",
      arrow: "#191a23",
      label: "text-primary",
    },
    simpleWhite: {
      circle: "bg-transparent",
      arrow: "#fff",
      label: "text-white",
    },
  };

  const style = variants[variant];
  return (
    <div
      className={`text-p-mob lg:text-p flex items-center gap-4 ${className}`}
    >
      <svg
        width="41"
        height="41"
        viewBox="0 0 41 41"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20.5" cy="20.5" r="20.5" fill={style.circle} />
        <path
          d="M11.2501 24.7009C10.5326 25.1151 10.2868 26.0325 10.701 26.75C11.1152 27.4674 12.0326 27.7132 12.7501 27.299L11.2501 24.7009ZM30.7694 16.3882C30.9839 15.588 30.509 14.7655 29.7088 14.5511L16.6688 11.057C15.8686 10.8426 15.0461 11.3175 14.8317 12.1177C14.6173 12.9179 15.0921 13.7404 15.8923 13.9548L27.4834 17.0606L24.3776 28.6517C24.1632 29.4519 24.6381 30.2744 25.4383 30.4888C26.2385 30.7033 27.061 30.2284 27.2754 29.4282L30.7694 16.3882ZM12.7501 27.299L30.0706 17.299L28.5706 14.7009L11.2501 24.7009L12.7501 27.299Z"
          fill={style.arrow}
        />
      </svg>

      <span className={style.label}>{text}</span>
    </div>
  );
};

export default Link;
