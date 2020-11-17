package com.menmoji.react;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

/**
 *
 * @author nyx
 */
@Component
public class DatabaseLoader implements CommandLineRunner {

    private final MenmojiRepository menmojiRepository;

    @Autowired
    public DatabaseLoader(MenmojiRepository repository) {
        System.out.println("##DatabaseLoader");

        this.menmojiRepository = repository;

    }

    @Override
    public void run(String... args) throws Exception {
        System.out.println("##run");

        menmojiRepository.save(new Menmoji("MENMOJI", "MOJI"));
    }

}
