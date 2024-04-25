package dsd.cohort.application.config;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Service;

@Service
@Configuration
public class ApiDetailsImpl implements ApiDetails {

  private String apiId;
  private String apiKey;

  public ApiDetailsImpl() {
    this.apiId = "4f5cb9f0";
    this.apiKey = "daf285496ffdf1049fc861142c36ea4c";
  }

  @Bean
  @Override
  public String getApiDetails() {
    return "?app_id=" + this.apiId + "&app_key=" + this.apiKey + "&type=public";
  }

}
