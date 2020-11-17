package com.menmoji.react;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import lombok.Data;

/**
 *
 * @author nyx
 */
@Data
@Entity
public class Menmoji {

    @Id
    @GeneratedValue
    private Long id;

    private String menmoji;
    private String moji;

    private Menmoji() {
    }

    public Menmoji(String menmoji, String moji) {
        System.out.println("###Menmoji");
        this.menmoji = menmoji;
        this.moji = moji;

    }

}
