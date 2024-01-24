import { Helmet } from "react-helmet-async";

type Props = {
  title?: string;
  description?: string;
  path?: string;
};

export const HeadBlock = ({ title, description, path }: Props) => {
  return (
    <Helmet>
      <title>
        {title ??
          "きたしる 北海道の企業と学生を雰囲気でマッチングする就活サービス"}
      </title>
      <meta
        name="description"
        content={
          description ??
          "きたしるは北海道向け就活サービスです。組織文化に基づいた自分に合った企業が分かります。"
        }
      />
      <link rel="canonical" href={`https:www.kitashiru.com/${path ?? ""}`} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    </Helmet>
  );
};
