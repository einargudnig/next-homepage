import { socialLinks } from "../constants/Social";
import { Icon } from "./Icons";

import "../styles/social.css";

const Social = () => (
  <div className="social-list">
    {socialLinks.map(({ url, name }, i) => (
      <li key={i}>
        <a href={url} aria-label={name}>
          <Icon name={name} />
        </a>
      </li>
    ))}
  </div>
);

export default Social;
