package com.tuned.tunedesc.config;

import org.springframework.boot.autoconfigure.mongo.MongoAutoConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Import;
import org.springframework.dao.annotation.PersistenceExceptionTranslationPostProcessor;
import org.springframework.data.mongodb.config.AbstractMongoConfiguration;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.transaction.PlatformTransactionManager;
import org.springframework.transaction.TransactionDefinition;
import org.springframework.transaction.TransactionException;
import org.springframework.transaction.TransactionStatus;

import com.mongodb.Mongo;
import com.mongodb.MongoClient;

    @Configuration
    @EnableMongoRepositories(basePackages = "com.tuned.tunedesc.web.repository")
    @Import(value = MongoAutoConfiguration.class)
    public class MongoCongurations extends AbstractMongoConfiguration {

        @Override
        protected String getDatabaseName() {
            return "tunedesc";
        }

        @Override
        public Mongo mongo() throws Exception {

            return new MongoClient("localhost", 27017);
        }

        @Override
        protected String getMappingBasePackage() {
            return "com.tuned.tunedesc.web.entity";
        }

        @Bean
        public MongoTemplate mongoTemplate() throws Exception {
            return new MongoTemplate(mongo(), getDatabaseName());
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

        public static void main(String[] args){



    }
}
