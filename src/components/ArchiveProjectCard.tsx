import SkillCard from "./SkillCard";
interface ArchiveProjectCardProp {
  Year: string;
  ProjectName: string;
  MadeAt: string;
  skills: string[];
  Link?: string;
}

export default function ArchiveProjectCard({
  Year,
  ProjectName,
  MadeAt,
  skills,
  Link,
}: ArchiveProjectCardProp) {
  return (
    <tr className="border-b border-slate-300/10 last:border-none">
      <td className="py-4 pr-4 align-top text-sm">
        <div className="translate-y-px">{Year}</div>
      </td>
      <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
        <div>
          <div className="block sm:hidden">
            <a
              className="inline-flex items-baseline font-medium leading-tight text-slate-200  hover:text-slate-200 focus-visible:text-teal-300 sm:hidden group/link text-base"
              href={Link}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`${ProjectName} (opens in a new tab)`}
            >
              <span className="inline-block">
                {ProjectName}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </span>
            </a>
          </div>
          <div className="hidden sm:block">{ProjectName}</div>
        </div>
      </td>
      <td className="hidden py-4 pr-4 align-top text-sm">
        <div className="translate-y-px whitespace-nowrap">{MadeAt}</div>
      </td>
      <td className="hidden py-4 pr-4 align-top lg:table-cell">
        <ul className="flex -translate-y-1.5 flex-wrap">
          {skills.map((skill, index) => (
            <SkillCard key={index} skill={skill} />
          ))}
        </ul>
      </td>
      <td className="hidden py-4 align-top sm:table-cell">
        <ul className="translate-y-1">
          <li className="mb-1 flex items-center">
            {Link && (
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  text-sm"
                href={Link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${Link}(opens in a new tab)`}
              >
                <span>
                  {" "}
                  <span className="inline-block">
                    {Link}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-0.5"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  </span>
                </span>
              </a>
            )}
          </li>
        </ul>
      </td>
    </tr>
  );
}
