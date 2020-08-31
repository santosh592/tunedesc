package com.tuned.tunedesc.config;

import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.mongodb.config.AbstractMongoClientConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionException;
import org.springframework.transaction.TransactionStatus;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
//import com.mongodb.MongoClient;

@Configuration
@EnableMongoRepositories(basePackages = "com.tuned.tunedesc")
@Import(value = MongoAutoConfiguration.class)
public class MongoCongurations extends AbstractMongoClientConfiguration {

    @Override
    protected String getDatabaseName() {
        return "tunedesc";
    }


    @Override
    protected Collection<String> getMappingBasePackages() {

        List<String> packages = new ArrayList<>();
        packages.add("com.tuned.tunedesc.web.entity");

        return packages;
    }


        /*@Override
        @Bean
        public MongoClient mongoClient() {

            MongoClientSettings settings = MongoClientSettings.builder()
                 //   .credential(MongoCredential.createCredential("name", "db", "pwd".toCharArray()))
                    .applyToClusterSettings(setting  -> {
                        setting.hosts(singletonList(new ServerAddress("127.0.0.1", 27017)));
                    })
                    .build();

            return MongoClients.create(settings);
        }*/

    @Override
    public MongoClient mongoClient() {
        return MongoClients.create("mongodb://localhost:27017/?replicaSet=rs0&w=majority");
    }

    @Bean
    public MongoTemplate mongoTemplate() throws Exception {
        return new MongoTemplate(mongoClient(), getDatabaseName());
    }

    @Bean
    public PersistenceExceptionTranslationPostProcessor postProcessor() {
        return new PersistenceExceptionTranslationPostProcessor();
    }

    @Bean
    public PlatformTransactionManager platformTransactionManager() {
        return new PlatformTransactionManager() {

            @Override
            public void rollback(TransactionStatus status)
                    throws TransactionException {

            }

            @Override
            public TransactionStatus getTransaction(
                    TransactionDefinition definition)
                    throws TransactionException {

                return null;
            }

            @Override
            public void commit(TransactionStatus status)
                    throws TransactionException {

            }
        };
    }

    public static void main(String[] args) {


    }
}
