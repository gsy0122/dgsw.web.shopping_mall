package kr.hs.dgsw.shopping_back.Domain;

import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@NoArgsConstructor
public class Review {
    private Long id;
    private Long productId;
    private String userId;
    private String content;
    private LocalDateTime created;
    private LocalDateTime updated;
}
