import { ArticleDetailsCommentsSchema } from './ArticleDetailsCommentsSchema';
import { ArticleDetailsRecommendationsSchema } from './ArticleDetailsRecommendationsSchema';

export interface ArticleDetailsPageSchema {
  coments: ArticleDetailsCommentsSchema;
  recommendations: ArticleDetailsRecommendationsSchema;
}
