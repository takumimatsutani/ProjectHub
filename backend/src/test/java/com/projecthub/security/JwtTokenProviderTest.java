// src/test/java/com/projecthub/security/JwtTokenProviderTest.java
package com.projecthub.security;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.security.core.Authentication;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.util.ReflectionTestUtils;

import static org.assertj.core.api.Assertions.assertThat;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.mockito.MockitoAnnotations.openMocks;

@SpringBootTest
@ActiveProfiles("test")
public class JwtTokenProviderTest {

    @Mock
    private CustomUserDetailsService userDetailsService;

    private JwtTokenProvider jwtTokenProvider;

    @BeforeEach
    public void setup() {
        openMocks(this);
        jwtTokenProvider = new JwtTokenProvider(userDetailsService);
        ReflectionTestUtils.setField(jwtTokenProvider, "secretKey", "testSecretKeyWithLength32BytesAtLeast");
        ReflectionTestUtils.setField(jwtTokenProvider, "validityInMilliseconds", 3600000L);
    }

    @Test
    public void testCreateAndValidateToken() {
        // トークン生成
        String token = jwtTokenProvider.createToken("user", "USER");

        // 検証
        assertThat(token).isNotEmpty();
        assertThat(jwtTokenProvider.validateToken(token)).isTrue();
        assertThat(jwtTokenProvider.getUsername(token)).isEqualTo("user");
    }
}